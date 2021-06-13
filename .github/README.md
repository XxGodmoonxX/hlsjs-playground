# hlsjs-playground

## /data

### MOONVIRUS

https://www.beeple-crap.com/vjloops  
https://vimeo.com/155970396  

```zsh
% ffmpeg -i MOONVIRUS.mp4 -codec copy -map 0 -f segment -vbsf h264_mp4toannexb -segment_format mpegts -segment_time 10 -segment_list video.m3u8 video-%03d.ts
```
