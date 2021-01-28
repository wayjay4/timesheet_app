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
        // $subjobs = array(
        //     'admin' => [],
        //     'cabl' => [],
        //     'infra' => [],
        //     'misc' => [],
        //     'netw' => [],
        //     'unbill' => [],
        // );

        $subjobs = array(
            'core-cable-' =>            [1,2,3,4],
            'core-infra-' =>            [5,6,7,8],
            'core-netw-' =>             [9,10,11,12],
            'dha-cabl-' =>              [13,14],
            'dha-infra-' =>             [15,16],
            'dha-netw-' =>              [17,18],
            'dhb-cabl-' =>              [19,20],
            'dhb-infra-' =>             [21,22],
            'dhb-netw-' =>              [23,24],
            'dhc-cabl-' =>              [25,26],
            'dhc-infra-' =>             [27,28],
            'dhc-netw-' =>              [29,30],
            'dhd-cabl-' =>              [31,32],
            'dhd-infra-' =>             [33,34],
            'dhd-netw-' =>              [35,36],
            'eqprent-misc-' =>          [37,38],
            'eqprent-unbill-' =>        [39],
            'freight-misc-' =>          [40],
            'gs-cabl-' =>               [41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],
            'gs-infra-' =>              [82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
            'gs-netw-' =>               [123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163],
            'ind stff-admin-' =>        [164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187],
            'safemeetwarmup-misc-' =>   [179],
            'sche unproduc-misc-' =>    [180],
            'train-misc-' =>            [181,182],
            'train-unbill-' =>          [183,184],
            'travel-misc-' =>           [185,186],
            'travel-unbill-' =>         [187,188],
            'unsche unprod-misc-' =>    [189],
            'ware-misc-' =>             [190],
        );
      
        foreach($subjobs as $key=>$value){
            $subjobID = DB::table('subjobs')->insertGetId([
                'name' => $key,
                'description' => ''
            ]);

            $subjob = Subjob::findOrFail($subjobID);

            // $tasktypes = Tasktype::all()
            //       ->random(mt_rand(1,40))
            //       ->pluck('id');

            $tasktypes = $value;

            $subjob->tasktypes()->attach($tasktypes);
        }
    }
}
