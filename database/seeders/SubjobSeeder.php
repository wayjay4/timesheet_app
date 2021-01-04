<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Subjob;
use App\Models\Tasktype;

class SubjobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $subjobs = array(
        'core-cable-',
        'core-infra-',
        'core-netw-',
        'dha-cabl-',
        'dha-infra-',
        'dha-netw-',
        'dhb-cabl-',
        'dhb-infra-',
        'dhb-netw-',
        'dhc-cabl-',
        'dhc-infra-',
        'dhc-netw-',
        'dhd-cabl-',
        'dhd-infra-',
        'dhd-netw-',
        'eqprent-misc-',
        'eqprent-unbill-',
        'freight-misc-',
        'gs-cabl-',
        'gs-infra-',
        'gs-netw-',
        'ind stff-admin-',
        'safemeetwarmup-misc-',
        'sche unproduc-misc-',
        'train-misc-',
        'train-unbill-',
        'travel-misc-',
        'travel-unbill-',
        'unsche unprod-misc-',
        'ware-misc-',
      );
      
      foreach($subjobs as $key=>$value){
        $subjobID = DB::table('subjobs')->insertGetId([
          'name' => $value,
          'description' => ''
        ]);

        $subjob = Subjob::findOrFail($subjobID);

        $tasktypes = Tasktype::all()
              ->random(mt_rand(1,40))
              ->pluck('id');

        $subjob->tasktypes()->attach($tasktypes);
      }
    }
}
