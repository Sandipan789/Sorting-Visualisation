function Merge()
{
    c_delay=0;

    merge_partition(0,ar_len-1);

    enableBut();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_size[q++];
            update_cur_div(divi[q-1],div_size[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=div_size[p++];
            update_cur_div(divi[p-1],div_size[p-1],"red");//Color update
        }
        else if(div_size[p]<div_size[q])
        {
            Arr[k++]=div_size[p++];
            update_cur_div(divi[p-1],div_size[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=div_size[q++];
            update_cur_div(divi[q-1],div_size[q-1],"red");//Color update
        }
    }

    for(var t=0;t<k;t++)
    {
        div_size[start++]=Arr[t];
        update_cur_div(divi[start-1],div_size[start-1],"green");//Color update
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        update_cur_div(divi[mid],div_size[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}