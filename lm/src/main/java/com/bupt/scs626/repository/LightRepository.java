package com.bupt.scs626.repository;

import com.bupt.scs626.entity.Light;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Administrator on 2017/8/13.
 */
public interface LightRepository extends JpaRepository<Light,String>{
    List<Light> findByBelongs(String belongs);
}
