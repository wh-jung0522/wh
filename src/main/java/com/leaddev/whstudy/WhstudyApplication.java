package com.leaddev.whstudy;

import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class WhstudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(WhstudyApplication.class, args);
	}

}
