package com.example.chatApp.Controller;

import com.example.chatApp.Entity.Room;
import com.example.chatApp.Model.Message;
import com.example.chatApp.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("http://localhost:5173")
@Controller
public class ChatController {

    @Autowired
    private final RoomRepository roomRepository ;

    public ChatController(RoomRepository roomRepository)
    {
        this.roomRepository = roomRepository ;
    }


    @MessageMapping("/message/{roomId}")
    @SendTo("/topic/{roomId}")
    public Message process(@DestinationVariable String roomId , @RequestBody com.example.chatApp.Model.Message message)
    {

        Room temp = roomRepository.findByRoomId(roomId) ;

        temp.getList().add(message) ;

        roomRepository.save(temp) ;

        return message ;

    }

}
