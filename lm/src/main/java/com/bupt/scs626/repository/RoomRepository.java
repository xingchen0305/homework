package com.bupt.scs626.repository;

import com.bupt.scs626.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Administrator on 2017/8/13.
 */
public interface RoomRepository extends JpaRepository<Room, String> {
    List<Room> findByBelongs(String belongs);
}
