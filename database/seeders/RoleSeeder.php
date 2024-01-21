<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $roleTypes = array(
        'employee',
        'supervisor'
      );

      foreach($roleTypes as $key=>$value){
        DB::table('roles')->insert([
          'name' => $value
        ]);
      }
    }
}
