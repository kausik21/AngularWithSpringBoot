package com.customer.app.service;

import com.customer.app.model.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CustomerService {

    List<Customer> getCustomerList();

    Optional<Customer> getCustomerById(Integer id);

    Customer createCustomer(Customer customer);

    void deleteCustomerById(Integer id);

}
