/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.devsymphony.web.controller.dao.impl;

import java.util.List;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Consultor
 */
@Repository("personaDao")
@Scope("singleton")
public class HomeDaoImpl {

    @Autowired
    SessionFactory sessionFactory;
/*
    @Override
    public Persona consultaPersonaPorId(Long id) {
        Session session = sessionFactory.openSession();
        System.out.println("Persona ID " + id);
        Query query = session.createQuery("from Persona P where P.id=:id");
        query.setParameter("id", id);

        Persona persona = (Persona) query.uniqueResult();
        System.out.println("Persona nombre " + persona.getNombre());
        session.close();

        return persona;
    }*/

    
}
