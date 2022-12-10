package com.example.finalProjSprint3.service;

import com.example.finalProjSprint3.repository.ItemRepository;
import com.example.finalProjSprint3.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService
{
    private static ItemRepository itemRepository;

    public ItemService(@Autowired ItemRepository itemRepository )
    {
        this.itemRepository = itemRepository;
    }


    public Item save(Item item )
    {
        return itemRepository.save(item);
    }


    public void delete( int itemId )
    {
        itemRepository.deleteById(itemId);
    }


    public static List<Item> all()
    {
        return itemRepository.findAll();
    }


    public Optional<Item> findById(int itemId )
    {
            return itemRepository.findById(itemId);

    }


}