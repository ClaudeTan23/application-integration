package oauth2.app.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig 
{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception
    {
         http.csrf().disable()
             .authorizeRequests()
             .anyRequest().authenticated()
             .and()
             .oauth2Login()
             .loginPage("/signin")
             .defaultSuccessUrl("/", true)
             .permitAll()
             .and()
             .logout()
             .logoutUrl("/logout")
             .logoutSuccessUrl("/signin")
            //  .clearAuthentication(true)
            //  .deleteCookies("JSESSIONID")
             .permitAll();
            
		return http.build();
    }
}
