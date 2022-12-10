package com.example.finalProjSprint3.repository;

import com.example.finalProjSprint3.controller.dto.ItemDto;
import com.example.finalProjSprint3.repository.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.converter.json.GsonBuilderUtils;

// This will be AUTO IMPLEMENTED by Spring into a Bean called itemRepository
// CRUD refers Create, Read, Update, Delete
public interface ItemRepository extends JpaRepository<Item, Integer>
{
}
