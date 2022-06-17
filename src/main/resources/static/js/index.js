let $addBtn = document.querySelector(".add");
let $databaseCourse = document.querySelector(".informationFieldsContainer");
let $selectFilters = document.querySelector(".sort");
let $searchData = document.querySelector(".search");
let $searchFilters = document.querySelector(".searchFilters");
let searchWord;
let database;
let $delBtn = document.querySelector(".keepDelete");
let $deleteSearch = document.querySelector("#deleteSearch");
let $container = document.querySelector(".container");
let $deleteWrapper = document.querySelector(".deleteWrapper");
let $dataList = document.querySelectorAll(".informationFieldsContainer .course");
let $teacherList = document.querySelectorAll(".informationFieldsContainer .teacher");
let $back = document.querySelector(".back");

fetch('http://localhost:8080/api/json')
    .then(function (responseD) {
        responseD.json().then(function (response) {
            console.log('database', response);
            getDatabase(response);
        });
    });

$back.addEventListener('click', function () {
    $dataList = document.querySelectorAll(".informationFieldsContainer .course");
    if($dataList.length>1){
        for (let i = 0; i < database.length; i++) {
            $dataList[i].classList.add("hide");
        }
    }
    $deleteWrapper.classList.add("hide");
    $container.classList.remove("hide");
});

$delBtn.addEventListener('click', function () {
    $deleteWrapper.classList.remove("hide");
    $container.classList.add("hide");
});

$addBtn.addEventListener('click', function () {
    document.location.href = 'add';
});

$deleteSearch.addEventListener('keyup', () => {
    console.log($deleteSearch.value);
    $dataList = document.querySelectorAll(".informationFieldsContainer .course");
    if($dataList.length>1){
        for (let i = 0; i < database.length; i++) {
            $dataList[i].classList.add("hide");
        }
    }
    if ($deleteSearch.value !== '') {
        for (let i = 0; i < database.length; i++) {
            if (database[i].courseName.search($deleteSearch.value.trim()) === 0) {
                $dataList[i].classList.remove("hide");
            }
        }
    }
});

function formatName(name) {
    let names = name.split(" ");
    let finishName = "";
    for (let i = 0; i < names.length; i++) {
        finishName += names[i][0].toUpperCase() + names[i].slice(1).toLowerCase() + ' ';
    }
    return finishName;
}

function getDatabase(response) {
    database = response;
    for (let i = 0; i < database.length; i++) {
        $databaseCourse.innerHTML += '<div class="course hide">' +
            '<div class="courseWrap">' +
            'Название курса/спецкурса: ' +
            database[i].courseName[0].toUpperCase() + database[i].courseName.slice(1).toLowerCase() + '</br>' +
            'Шифр курса: ' +
            database[i].courseCode + '</br>' +
            'Факультет: ' +
            database[i].faculty.toUpperCase() + '</br>' +
            'Номер курса: ' +
            database[i].numbCourse + '</br>' +
            'Группа студентов: ' +
            database[i].group.toUpperCase() + '</br>' +
            'Часы лекций, приктик, лабораторных: ' +
            database[i].houresSubjectLecturesPracticalLaboratory + '</br>' +
            'Имя преподавателя: ' +
            formatName(database[i].nameTeacher) + '</br>' +
            'Имена ассистентов: ' +
            formatName(database[i].nameAssistants.toString()) +
            '</div>' +
            '<div class="linksCourseWrap">' +
            '<a href="/delete?id=' + i + '">Удалить</a>' +
            '<a href="/edit?id=' + i + '">Изменить</a>' +
            '</div>' +
            '</div>';
        console.log("Удачно");
    }
}

$selectFilters.addEventListener('change', () => {
    $dataList = document.querySelectorAll(".informationFieldsContainer .course");
    $teacherList = document.querySelectorAll(".informationFieldsContainer .teacher");

    for (let i = 0; i < database.length; i++) {
        $dataList[i].classList.add("hide");
    }

    if ($teacherList !== null) {
        for (let i = 0; i < $teacherList.length; i++) {
            $teacherList[i].classList.add("hide");
        }
    }

    //search academic disciplines not provided with teaching staff
    if ($selectFilters.value === 'withoutTeachers') {
        for (let i = 0; i < database.length; i++) {
            if ((database[i].nameTeacher).split("").length === 0) {
                $dataList[i].classList.remove("hide");
            } else {
                $dataList[i].classList.add("hide");
            }
        }
    }

    //issuance of information about the teachers of the department and their total workload
    // (courses taught, the total number of hours of workload)
    if ($selectFilters.value === 'totalWorkloadTeachers') {
        let name;
        let infoCourseNames;
        let infoTotalHours;
        if ($teacherList.length > 1) {
            for (let i = 0; i < $teacherList.length; i++) {
                $teacherList[i].classList.remove("hide");
            }
        } else {
            for (let i = 0; i < database.length; i++) {
                if (database[i].nameTeacher.split("").length !== 0) {
                    name = database[i].nameTeacher;
                    infoCourseNames = database[i].courseName;
                    infoTotalHours = database[i].houresSubjectLecturesPracticalLaboratory[0] +
                        database[i].houresSubjectLecturesPracticalLaboratory[1] +
                        database[i].houresSubjectLecturesPracticalLaboratory[2];
                    for (let j = 1; j < database.length; j++) {
                        if (database[1].nameTeacher === database[j].nameTeacher) {
                            infoCourseNames += database[j].courseName + '\; ';
                            infoTotalHours = database[j].houresSubjectLecturesPracticalLaboratory[0] +
                                database[j].houresSubjectLecturesPracticalLaboratory[1] +
                                database[j].houresSubjectLecturesPracticalLaboratory[2];
                        }
                    }
                    $databaseCourse.innerHTML += '<div class="teacher">' +
                        'ФИО преподавателя: ' +
                        name + '</br>' +
                        'Читаемые курсы: ' +
                        infoCourseNames + '</br>' +
                        'Суммарное количество часов нагрузки: ' +
                        infoTotalHours + '</br>' +
                        '</div>';
                }
            }
        }


    }

    //Предметах, в которых суммарное кол-во часов, отводимых на практические и лабораторные занятия,
    // меньше лекционных часов
    if ($selectFilters.value === 'subjectHours') {
        for (let i = 0; i < database.length; i++) {
            if (database[i].houresSubjectLecturesPracticalLaboratory[0] >
                database[i].houresSubjectLecturesPracticalLaboratory[1] +
                database[i].houresSubjectLecturesPracticalLaboratory[2]) {
                $dataList[i].classList.remove("hide");
            }
        }
    }
});

$searchFilters.addEventListener('change', () => {
    $dataList = document.querySelectorAll(".informationFieldsContainer .course");
    console.log($searchFilters.value);
    $selectFilters.value = 'none';
    searchWord = $searchFilters.value;
    for (let i = 0; i < database.length; i++) {
        $dataList[i].classList.add("hide");
    }
});

$searchData.addEventListener('keyup', () => {
    $dataList = document.querySelectorAll(".informationFieldsContainer .course");
    $teacherList = document.querySelectorAll(".informationFieldsContainer .teacher")
    console.log($searchData.value);

    for (let i = 0; i < database.length; i++) {
        $dataList[i].classList.add("hide");
    }
    if ($teacherList.length > 1) {
        for (let i = 0; i < $teacherList.length; i++) {
            $teacherList[i].classList.add("hide");
        }
    }


    if ($searchData.value !== '') {
        if ($searchFilters.value === 'hoursLectures') {
            for (let i = 0; i < database.length; i++) {
                if (database[i].houresSubjectLecturesPracticalLaboratory[0].toString() === $searchData.value) {
                    $dataList[i].classList.remove("hide");
                    console.log($dataList[i]);
                }
            }
        }

        if ($searchFilters.value === 'courseName' || $searchFilters.value === 'faculty' || $searchFilters.value === 'nameTeacher') {
            for (let i = 0; i < database.length; i++) {
                if (database[i][$searchFilters.value].search($searchData.value.trim()) === 0) {
                    $dataList[i].classList.remove("hide");
                }
            }
        }

        if ($searchFilters.value === 'numbCourse' || $searchFilters.value === 'courseCode'
            || $searchFilters.value === 'group' || $searchFilters.value === 'nameTeacher'
            || $searchFilters.value === 'nameAssistants') {
            for (let i = 0; i < database.length; i++) {
                if (database[i][$searchFilters.value].toString().search($searchData.value.trim()) === 0) {
                    $dataList[i].classList.remove("hide");
                }
            }
        }

        if ($searchFilters.value === 'hoursPractical') {
            for (let i = 0; i < database.length; i++) {
                if (database[i].houresSubjectLecturesPracticalLaboratory[1] === $searchData.value) {
                    $dataList[i].classList.remove("hide");
                    console.log($dataList[i]);
                }
            }
        }

        if ($searchFilters.value === 'hoursLaboratory') {
            for (let i = 0; i < database.length; i++) {
                if (database[i].houresSubjectLecturesPracticalLaboratory[2] === $searchData.value) {
                    $dataList[i].classList.remove("hide");
                    console.log($dataList[i]);
                }
            }
        }
    }
});




