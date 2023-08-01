package kyn.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kyn.project.Entity.User;
import kyn.project.Repository.UserRepo;

@Service
public class RegisterService 
{
    @Autowired
    UserRepo userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    public String Run(User user)
    {
        User findUser = userRepo.findByUsername(user.getUsername());

        if(findUser == null)
        {
            String encryptPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encryptPassword);

            userRepo.save(user);

            return "ok";

        } else 
        {
            return "username existed";
        }
    }    
}
