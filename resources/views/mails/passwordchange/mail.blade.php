@component('mail::message')

<img height="50" src={{"$url/profile/image/$image"}}></img>
Hi **{{$name}}**,

Your password was changed {{date('D, d M Y H:i:s')}} at {{$location}}.

If **{{"you did this"}}**, you can safely disregard this email.

Thanks,
 
The at-School Security Team.
@endcomponent
