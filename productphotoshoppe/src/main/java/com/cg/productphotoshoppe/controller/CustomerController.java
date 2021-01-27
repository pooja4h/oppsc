package com.cg.productphotoshoppe.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.productphotoshoppe.exception.ResourceNotFoundException;
import com.cg.productphotoshoppe.model.Customer;
import com.cg.productphotoshoppe.model.Login;
import com.cg.productphotoshoppe.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CustomerController {
	Customer c = new Customer();

	@Autowired
	private CustomerService customerService;

	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
		return this.customerService.getAllCustomers();
	}

	@PostMapping("/customers")
	public Customer addCustomer(@Valid @RequestBody Customer customer) {

		return this.customerService.addCustomer(customer);
	}

	@GetMapping("/{id}")
	public Optional<Customer> findById(@PathVariable Integer id) {
		return customerService.findById(id);
	}

	@DeleteMapping("/{id}")
	public void deleteCustomerById(@PathVariable("id") Integer id) {
		this.customerService.deleteCustomerById(id);

	}

	@PutMapping("/customer/{id}")
	public Customer updateCustomer(@PathVariable("id") Integer id, @RequestBody Customer customer1) {
		return customerService.updateCustomer(id, customer1);
	}

	@PostMapping("/login")
	public String login(@RequestBody Login login)throws ResourceNotFoundException {
		return customerService.login(login);
	}
	
	@GetMapping("/getUser/{username}")
	public Customer getByUserName(@PathVariable("username") String username)
	{
		return customerService.getByUserName(username);
	}


}
