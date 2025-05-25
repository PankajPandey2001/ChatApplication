package com.example.chatApp.service;


import com.example.chatApp.Entity.Room;
import com.example.chatApp.Model.Message;
import com.example.chatApp.Model.RoomDetails;
import com.example.chatApp.repository.RoomRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {



    private final RoomRepository roomRepository ;

    public RoomService(RoomRepository roomRepository)
    {
        this.roomRepository = roomRepository ;
    }

    public Room findRoom(String roomId)
    {
        Room room = roomRepository.findByRoomId(roomId) ;

        return room ;
    }
    public List<Message> getMessages(String roomId)
    {
        Room room = roomRepository.findByRoomId(roomId) ;

        return room.getList() ;
    }

    public Room createRoom( RoomDetails roomDetails)
    {

         Room room  = roomRepository.findByRoomId(roomDetails.getRoomId()) ;

         if( room != null)
         {
             return null ;
         }

       Room temp =  new Room(roomDetails.getRoomId() ,roomDetails.getRoomName() ) ;
       Room temp1 =  roomRepository.save(temp) ;

       System.out.println(temp1 +  " " + temp1.getRoomName()) ; ;
       return temp1 ;
    }
}
