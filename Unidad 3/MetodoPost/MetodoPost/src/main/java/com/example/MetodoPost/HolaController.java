package com.example.metodoPost;

import org.springframework.web.bind.annotation.*;

@RestController
public class HolaController {

    private String Correo = "Diego";
    private String Contrasenia = "Cisco";

    @PostMapping("/login")
    public String login(@RequestParam String correo, @RequestParam String contrasena) {

        if (Correo == null && Contrasenia == null) {
            return "<h1>Correo o contraseña incorrectos</h1>";
        } else {
            return "<h1>Bienvenido, " + correo + "</h1>";
        }

    }
}
