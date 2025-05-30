package com.example.chatApp.repository;

import com.example.chatApp.Entity.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends MongoRepository<Room,String> {

    Room findByRoomId(String roomId) ;
}
