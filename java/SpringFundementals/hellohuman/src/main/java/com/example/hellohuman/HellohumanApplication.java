package com.example.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@SpringBootApplication
public class HellohumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HellohumanApplication.class, args);
	}
	@RequestMapping("")
	public String index(@RequestParam(value="name",required=false) String searchQuery,@RequestParam(value="last_name",required=false) String lastname) {
		if(searchQuery == null && lastname ==null) {
			return "<h1>Hello Human</h1>";
		}
		if (searchQuery != null && lastname != null) {
		return "<h1>Hello " + searchQuery+" " +lastname +  "</h1><p>Welcome to SpringBoot</p>";
		}
		if (searchQuery ==null && lastname != null) {
			return "<h1>Hello " + lastname + "</h1> next time don't forget ur first name ";
		}
		return "<h1>Hello " + searchQuery+  "</h1><p>Welcome to SpringBoot</p>";
	}

}
