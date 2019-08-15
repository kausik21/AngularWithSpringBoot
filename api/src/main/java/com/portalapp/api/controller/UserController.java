package com.portalapp.api.controller;

import com.portalapp.api.model.UserModel;
import com.portalapp.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api"})
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserModel create(@RequestBody UserModel user){
        return userService.save(user);
    }

    @GetMapping(path = {"/{id}"})
    public UserModel findOne(@PathVariable("id") int id){
        return userService.findOne(id);
    }

    @GetMapping
    public List findAll(){
        return userService.findAll();
    }
}
