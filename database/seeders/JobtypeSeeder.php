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
      'core' =>                               [1,2,3],
      'data hall a' =>                        [4,5,6],
      'data hall b' =>                        [7,8,9],
      'data hall c' =>                        [10,11,12],
      'data hall d' =>                        [13,14,15],
      'equipment and rentals' =>              [16,17],
      'freight' =>                            [18],
      'general systems' =>                    [19,20,21],
      'indirect staffing' =>                  [22],
      'non-scheduled non productive time' =>  [29],
      'safety meetings and warm-up' =>        [23],
      'scheduled non productive time' =>      [24],
      'training' =>                           [25,26],
      'travel' =>                             [27,28],
      'warehousing' =>                        [30],
    );
      
    foreach($jobTypes as $key=>$value){
      $jobtypeID = DB::table('jobtypes')->insertGetId([
        'name' => $key,
        'description' => ''
      ]);

      $jobtype = Jobtype::findOrFail($jobtypeID);

      // $subjobs = Subjob::all()
      //       ->random(mt_rand(1,4))
      //       ->pluck('id');

      $subjobs = $value;

      $jobtype->subjobs()->attach($subjobs);
    }
  }
}
