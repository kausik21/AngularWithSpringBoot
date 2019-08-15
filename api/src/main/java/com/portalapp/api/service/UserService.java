package com.portalapp.api.service;


import com.portalapp.api.model.UserModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    void delete(UserModel user);

    List findAll();

    UserModel findOne(int id);

    UserModel save(UserModel user);
}
