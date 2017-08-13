package com.bupt.scs626.controller;

import com.bupt.scs626.entity.Light;
import com.bupt.scs626.service.LightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.bupt.scs626.common.MessageUtil.sendFailMessage;
import static com.bupt.scs626.common.MessageUtil.sendSuccessMessage;

/**
 * Created by Administrator on 2017/8/13.
 */
@RestController
@RequestMapping("/light")
public class LightControler {
    @Autowired
    private LightService lightService;

    @RequestMapping(value="/find/{belongs}",method= RequestMethod.GET)
    public String findOne(@PathVariable(value="belongs") String belongs){
        List<Light> light = lightService.findByBelongs(belongs);
        if(light!=null)
            return sendSuccessMessage(light);
        else return sendFailMessage();
    }
    @RequestMapping(value = "/saveOrUpdate",method= RequestMethod.POST)
    public String saveOrUpdate(@RequestBody Light light){
        lightService.save(light);
        return sendSuccessMessage();
    }

    @RequestMapping(value = "/test",method= RequestMethod.GET)
    public String test(){

        return "chenggong";
    }
}
