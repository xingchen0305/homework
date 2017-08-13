package com.bupt.scs626.service;

import com.bupt.scs626.entity.Light;
import com.bupt.scs626.repository.LightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/8/13.
 */
@Service
public class LightService {
    @Autowired
    private LightRepository lightRepository;

    public List<Light> findAll(){
        return lightRepository.findAll();
    }
    public List<Light> findByBelongs(String belongs){
        return lightRepository.findByBelongs(belongs);
    }

    public void save(Light light){
        lightRepository.save(light);
    }
}
