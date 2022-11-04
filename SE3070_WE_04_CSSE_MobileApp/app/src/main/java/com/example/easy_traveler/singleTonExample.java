package com.example.easy_traveler;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.speech.tts.TextToSpeech;
import android.widget.Toast;

//singleton class
public class singleTonExample {

    static TextToSpeech tool1;
    private static singleTonExample ourInstance = new singleTonExample();
    private Context appContext;
    private singleTonExample() {

    }
    public static Context get() {

        return getInstance().getContext();
    }
    public static synchronized singleTonExample getInstance() {

        return ourInstance;
    }
    public void init(Context context) {
        if (appContext == null) {
            this.appContext = context;
        }
    }

    private Context getContext() {

        return appContext;
    }

    public void AlertDialog(final infoActivity infoActivity) {
        AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(infoActivity);
        alertDialogBuilder.setMessage("Are you sure, You wanted to make decision");

        alertDialogBuilder.setPositiveButton("yes",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface arg0, int arg1) {
                        Toast.makeText(infoActivity, "You clicked yes button", Toast.LENGTH_LONG).show();
                    }
                });
        alertDialogBuilder.setNegativeButton("No", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

                infoActivity.finish();
            }
        });
        AlertDialog alertDialog = alertDialogBuilder.create();
        alertDialog.show();
    }
}
