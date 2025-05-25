package com.example.chatApp.Controller;


import com.example.chatApp.Entity.Room;
import com.example.chatApp.Model.Message;
import com.example.chatApp.Model.RoomDetails;
import com.example.chatApp.service.RoomService;
import lombok.Data;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    private final RoomService roomService ;

    public RoomController ( RoomService roomService)
    {
        this.roomService = roomService ;
    }



    // this controller is especially when any person would like to join any group so ui will thi this endpoint
    //to get the room info 
    @GetMapping("/{roomId}")
    public ResponseEntity<Room> getRoom(@PathVariable String roomId)
    {
       Room room =  roomService.findRoom(roomId) ;

        if( room == null)
            return ResponseEntity.notFound().build();
       return ResponseEntity.ok(room) ;
    }

    @PostMapping("/create")
    public ResponseEntity<Room> createRoom( @RequestBody RoomDetails roomDetails)
    {
        Room room1 = roomService.createRoom(roomDetails) ;

       if(room1 == null)
       {
           return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body(null) ;
       }

       return ResponseEntity.ok(room1) ;
    }

    @GetMapping("/messages/{roomId}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable  String roomId)
    {
        List<Message> list = roomService.getMessages(roomId) ;

        return ResponseEntity.ok(list) ;
    }

}
