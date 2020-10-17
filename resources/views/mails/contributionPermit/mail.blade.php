@component('mail::message')

<img height="50" src={{"$url/profile/image/$image"}}></img>
Hi **{{$name}}**,

You've been permitted to Contribute to the growth of Students on {{env('APP_NAME')}} by uploading practice Questions.

It's all thanks to **{{$referrer}}**, who has put a lot of trust in you. And has agreed to hold shared responsibilities
for the actions you carry out with this ability.

You can now enable this feature by visiting the Advanced Settings section on your Dashboard.
@component('mail::button', ['url' => $link])
Visit Settings
@endcomponent

Thanks,

The at-School Development Team.
@endcomponent
