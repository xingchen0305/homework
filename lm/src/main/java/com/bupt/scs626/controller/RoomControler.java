package com.bupt.scs626.controller;

import com.bupt.scs626.entity.Room;
import com.bupt.scs626.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.bupt.scs626.common.MessageUtil.sendFailMessage;
import static com.bupt.scs626.common.MessageUtil.sendSuccessMessage;

/**
 * Created by Administrator on 2017/8/13.
 */
@RestController
@RequestMapping("/room")
public class RoomControler {
    @Autowired
    private RoomService roomService;

    @RequestMapping(value="/find",method= RequestMethod.GET)
    public String findAll(){
        List<Room> room = roomService.findAll();
        if(room!=null)
            return sendSuccessMessage(room);
        else return sendFailMessage();
    }

    @RequestMapping(value="/find/{belongs}",method= RequestMethod.GET)
    public String findOne(@PathVariable(value="belongs") String belongs){
        List<Room> room = roomService.findByBelongs(belongs);
        if(room!=null)
            return sendSuccessMessage(room);
        else return sendFailMessage();
    }
    @RequestMapping(value = "/saveOrUpdate",method= RequestMethod.POST)
    public String saveOrUpdate(@RequestBody Room room){
        roomService.save(room);
        return sendSuccessMessage();
    }

    @RequestMapping(value = "/test",method= RequestMethod.GET)
    public String test(){

        return "chenggong";
    }
}
