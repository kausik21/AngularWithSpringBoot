package com.portalapp.api.service;

import com.portalapp.api.model.UserModel;
import com.portalapp.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void delete(UserModel user) {
        userRepository.delete(user);
    }

    @Override
    public List findAll() {
        return userRepository.findAll();
    }

    @Override
    public UserModel findOne(int id) {
        return userRepository.findById(id).orElse(new UserModel());
    }

    @Override
    public UserModel save(UserModel user) {
       return userRepository.save(user);
    }
}
