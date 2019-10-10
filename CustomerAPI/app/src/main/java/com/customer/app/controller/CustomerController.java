package com.customer.app.controller;

import com.customer.app.model.Customer;
import com.customer.app.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomer(){
        return customerService.getCustomerList();
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable(value = "id") Integer id){
        Optional<Customer> customer = customerService.getCustomerById(id);
        if(customer.isPresent()) {
            return ResponseEntity.ok().body(customer.get());
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/customers")
    public Customer createCustomer(@Valid @RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable(value = "id") Integer id) {
        customerService.deleteCustomerById(id);
    }
}
