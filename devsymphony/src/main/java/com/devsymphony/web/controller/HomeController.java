/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.devsymphony.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Consultor
 */
@Controller
@RequestMapping("/home")
public class HomeController {

    public HomeController() {
        System.out.println("Entro a controller");
    }

    @RequestMapping(value = "/incializar")
    public String incializar() {
        System.out.println("Entro a inicializar");
        return "html/index";
    }

}
