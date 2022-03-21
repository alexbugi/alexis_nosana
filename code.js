<script type="text/javascript">
function SubmitControl(frm)
{
for (i=0; i < frm.length;i++)
    if(frm.elements[i].type.toLowerCase()=="submit"||frm.elements[i].type.toLowerCase()=="reset")
      frm.elements[i].disabled = true
}
</script>


<form method="POST" onsubmit=SubmitControl(this)>

<input class="enter" type="submit" value="PUSH ME">

</form>
