package com.example.sequrity;

import java.io.BufferedReader;
import java.io.FileReader;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer.AuthorizedUrl;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class Security extends WebSecurityConfigurerAdapter {
    public Security() {
    }

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("src/main/java/com/example/password.txt"));
        String currentPassword = br.readLine();
        br.close();
        auth.inMemoryAuthentication().withUser("admin").password(currentPassword).roles("ADMIN");
    }

    protected void configure(HttpSecurity http) throws Exception {
        ((HttpSecurity)((AuthorizedUrl) http.csrf().disable().cors().disable().authorizeRequests().antMatchers(new String[]{"/**"})).hasRole("ADMIN").and()).formLogin();
    }

    @Bean
    public PasswordEncoder encoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}