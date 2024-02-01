package com.sunbasedata.CustomerApp.repository;

import com.sunbasedata.CustomerApp.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;


public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByUuid(UUID uuid);

    @Modifying
    @Query("DELETE FROM Customer c WHERE c.uuid = :uuid")
    void deleteByUuid(@Param("uuid") UUID uuid);
}
