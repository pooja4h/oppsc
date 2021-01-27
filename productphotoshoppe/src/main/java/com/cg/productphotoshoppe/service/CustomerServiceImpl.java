package com.cg.productphotoshoppe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.productphotoshoppe.exception.ResourceNotFoundException;
import com.cg.productphotoshoppe.model.Customer;
import com.cg.productphotoshoppe.model.Login;
import com.cg.productphotoshoppe.repository.CustomerRepository;

@Service("customerService")
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public List<Customer> getAllCustomers() {
		return this.customerRepository.findAll();
	}

	@Override
	public Customer addCustomer(Customer customer) {

		return this.customerRepository.save(customer);
	}

	@Override
	public Optional<Customer> findById(Integer id) {
		return customerRepository.findById(id);
	}

	@Override
	public void deleteCustomerById(Integer id) {
		this.customerRepository.deleteById(id);

	}

	@Override
	public Customer updateCustomer(Integer id, Customer customer1) {
		Customer cust = this.customerRepository.findById(id).get();
		cust.setAddress(customer1.getAddress());
		cust.setEmail(customer1.getEmail());
		cust.setFirstName(customer1.getFirstName());
		cust.setLastName(customer1.getLastName());
		cust.setPassword(customer1.getPassword());
		cust.setPhoneNo(customer1.getPhoneNo());
		cust.setUsername(customer1.getUsername());
		return this.customerRepository.save(cust);
	}

	@Override
	public String login(Login login) throws ResourceNotFoundException {

		String result = "";
		String username = login.getUsername();
		String password = login.getPassword();
		Customer customer = customerRepository.findByUserName(username);
		if (customer == null) {
			result = "user does not exist";
		} if(customer!=null) {
			if (customer.getPassword().equals(password)) {
				result = "welcome";
			} else if (!customer.getPassword().equals(password)) {
				result = "please enter correct password";
			}

			else {
				result = "incorrect credentials";

			}
		}

		return result;
	}

	@Override
	public Customer getByUserName(String userName) {
		return customerRepository.findByUserName(userName);
	}
}
