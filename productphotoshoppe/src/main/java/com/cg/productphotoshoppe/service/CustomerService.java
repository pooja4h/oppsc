package com.cg.productphotoshoppe.service;

import java.util.List;
import java.util.Optional;

import com.cg.productphotoshoppe.exception.ResourceNotFoundException;
import com.cg.productphotoshoppe.model.Customer;
import com.cg.productphotoshoppe.model.Login;

public interface CustomerService {
	public List<Customer> getAllCustomers();

	public Customer addCustomer(Customer customer);

	public Optional<Customer> findById(Integer id);

	public void deleteCustomerById(Integer id);

	public Customer updateCustomer(Integer id, Customer customer1);

	public String login(Login login) throws ResourceNotFoundException;
	
	public Customer getByUserName(String userName);

}
