<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('notes')->insert([
            'category_id' => 1,
            'note_title' => 'Test Note',
            'note_text' => 'Note Body Text',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
