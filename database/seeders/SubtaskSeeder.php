<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Subtask;

class SubtaskSeeder extends Seeder
{
    /**
    * Run the database seeds.
    *
    * @return void
    */
    public function run()
    {
        $subtasks = array(
            'administrave staff',
            'asso project manager',
            'bldg super (gf)',
            'cabling cleaning crew',
            'cabling dress',
            'cabling fiber pull',
            'cabling fiber test',
            'cabling label',
            'cabling material handling',
            'cabling prefabrication',
            'cabling troubleshooting',
            'consumables',
            'containment',
            'copper patch',
            'equipment rentals',
            'fiber patch',
            'fim',
            'foreman/supervisor',
            'freight',
            'grounding',
            'infra cleaning crew',
            'infra label',
            'infra material handling',
            'infra prefabrication',
            'infra troubleshooting',
            'install 4ru',
            'install fsb',
            'install horizontal mgr',
            'install mbox',
            'install patch panel',
            'install waps',
            'lay-down yard superv',
            'material handler',
            'material handling',
            'material management',
            'network cleaning crew',
            'network dress',
            'network label',
            'network material handling',
            'network prefabrication',
            'network troubleshooting',
            'optics install',
            'p6 administrator',
            "pdu's",
            'project engineer',
            'project manager',
            'pull copper',
            'qa/qc',
            'rack',
            'rack and stack',
            'rail kits',
            'safemeet &wrmup',
            'safety manager',
            'safety personnel',
            'sche unprod time',
            'site program manager',
            'sr project manager',
            'terminate copper',
            'terminate fiber',
            'test copper',
            'tier 1',
            'tier 2',
            'tier3/ waterfalls',
            'training',
            'training hours',
            'travel cost',
            'travel hours',
            'unbill travel cost',
            'unbill travel hours',
            'unbillable training',
            'unbillbl equip rents',
            'unbillbl train hours',
            'unsch unprod time',
            'wall vertical ladder rak',
        );
      
        foreach($subtasks as $key=>$value){
            $subtaskID = DB::table('subtasks')->insertGetId([
                'name' => $value,
                'description' => ''
            ]);
        }
    }
}
