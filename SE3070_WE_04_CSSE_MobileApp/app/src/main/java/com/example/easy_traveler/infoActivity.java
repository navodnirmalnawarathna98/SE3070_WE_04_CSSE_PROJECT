package com.example.easy_traveler;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class infoActivity extends AppCompatActivity {

    Button show;
    singleTonExample singletonexample;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_info);

        show = findViewById(R.id.show);
        singletonexample = singletonexample.getInstance();
        singletonexample.init(getApplicationContext());

        show.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                singletonexample.AlertDialog(infoActivity.this);
            }
        });

        Bundle bundle = getIntent().getExtras();
        if(bundle != null){
            if (bundle.getString("some") != null){
                Toast.makeText(getApplicationContext(),
                        "data:" + bundle.getString("some"),
                        Toast.LENGTH_SHORT).show();
            }
        }



    }
}