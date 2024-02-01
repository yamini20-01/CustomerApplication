package com.sunbasedata.CustomerApp.controller;

import com.sunbasedata.CustomerApp.entity.Customer;
import com.sunbasedata.CustomerApp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/allCustomers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/getCustomerByUuid/{uuid}")
    public Optional<Customer> getCustomerById(@PathVariable String uuid) {
        return customerService.getCustomerByUuid(UUID.fromString(uuid));
    }


    @PostMapping("/addCustomer")
    public Customer createCustomer(@RequestBody Customer customer) {
        String uniqueID = UUID.randomUUID().toString();
        customer.setUuid(uniqueID);
        return customerService.createOrUpdateCustomer(customer);
    }

    @PostMapping("/updateCustomer/{uuid}")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.createOrUpdateCustomer(customer);
    }

    @PostMapping("/addListOfCustomers")
    public List<Customer> createCustomers(@RequestBody List<Customer> customers) {
        return customerService.createOrUpdateCustomers(customers);
    }

    @PutMapping("/update/{uuid}")
    public Customer updateCustomer(@PathVariable String uuid, @RequestBody Customer customer) {
        customer.setUuid(uuid);
        return customerService.createOrUpdateCustomer(customer);
    }

    @DeleteMapping("delById/{uuid}")
    public void deleteCustomer(@PathVariable String uuid) {
        customerService.deleteCustomer(UUID.fromString(uuid));
    }
}
