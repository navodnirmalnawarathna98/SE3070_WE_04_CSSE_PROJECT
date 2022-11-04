package com.example.easy_traveler;

import android.content.ClipData;
import java.util.ArrayList;
import java.util.List;

/*
*first create class
*create instance
* */

public class ListSingleton {

    private static ListSingleton instance;
    private List<ClipData.Item> itemList = new ArrayList<>();

    //private constructor
    private ListSingleton(){

    }

    public static synchronized  ListSingleton getInstance(){
        if (instance == null){
            instance = new ListSingleton();
        }
        return  instance;
    }

    //genarate getters and setters
    public static void setInstance(ListSingleton instance) {
        ListSingleton.instance = instance;
    }

    public List<ClipData.Item> getItemList() {
        return itemList;
    }

    public void setItemList(List<ClipData.Item> itemList) {
        this.itemList = itemList;
    }
}
