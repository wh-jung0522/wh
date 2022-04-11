package com.leaddev.whstudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"controller"})
public class WhstudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(WhstudyApplication.class, args);
	}

}
