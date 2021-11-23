<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::factory()->create([
            'name' => 'test1',
            'email' => 'test1@test.jp',
            'password' => bcrypt('testtest')
        ]);
        DB::table('users')->insert([
            'name' => 'test2',
            'email' => 'test2@test.jp',
            'password' => Hash::make('password')
        ]);
        User::factory()->count(3)->create();
    }
}
