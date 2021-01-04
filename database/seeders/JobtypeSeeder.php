<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Subjob;
use App\Models\Jobtype;

class JobtypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $jobTypes = array(
        'core',
        'data hall a',
        'data hall b',
        'data hall c',
        'data hall d',
        'equipment and rentals',
        'freight',
        'general systems',
        'indirect staffing',
        'non-scheduled non productive time',
        'safety meetings and warm-up',
        'scheduled non productive time',
        'training',
        'travel',
        'warehousing',
      );
      
      foreach($jobTypes as $key=>$value){
        $jobtypeID = DB::table('jobtypes')->insertGetId([
          'name' => $value,
          'description' => ''
        ]);

        $jobtype = Jobtype::findOrFail($jobtypeID);

        $subjobs = Subjob::all()
              ->random(mt_rand(1,4))
              ->pluck('id');

        $jobtype->subjobs()->attach($subjobs);
      }
    }
}
