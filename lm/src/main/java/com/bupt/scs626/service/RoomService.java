package com.bupt.scs626.service;

import com.bupt.scs626.entity.Room;
import com.bupt.scs626.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/8/13.
 */
@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public List<Room> findAll(){
        return roomRepository.findAll();
    }
    public List<Room> findByBelongs(String belongs){
        return roomRepository.findByBelongs(belongs);
    }

    public void save(Room room){
        roomRepository.save(room);
    }
}
