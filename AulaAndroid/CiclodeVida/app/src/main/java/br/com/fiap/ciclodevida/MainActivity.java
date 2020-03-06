package br.com.fiap.ciclodevida;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.d("Meulog", "Passou pelo onCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();

        Log.d("Meulog", "Passou pelo onStart");
    }

    @Override
    protected void onResume() {
        super.onResume();

        Log.d("Meulog", "Passou pelo onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();

        Log.d("Meulog", "Passou pelo onPause");
    }

    @Override
    protected void onStop() {
        super.onStop();

        Log.d("Meulog", "Passou pelo onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();

        Log.d("Meulog", "Passou pelo onRestart");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        Log.d("Meulog", "Passou pelo onDestroy");
    }
}
