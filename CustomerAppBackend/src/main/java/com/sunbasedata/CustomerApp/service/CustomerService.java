package com.sunbasedata.CustomerApp.service;




import com.sunbasedata.CustomerApp.entity.Customer;
import com.sunbasedata.CustomerApp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerByUuid(UUID uuid) {
        return customerRepository.findByUuid(uuid);
    }


    public Customer createOrUpdateCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public List<Customer> createOrUpdateCustomers(List<Customer> customers) {
        return customerRepository.saveAll(customers);
    }

    public void deleteCustomer(UUID uuid) {
        customerRepository.deleteByUuid(uuid);
    }
}
