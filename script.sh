# sudo chmod +x script.sh
echo "Enter directory"
read ndir
if [ -d "$ndir" ]
then
echo "Directory exists"
else
echo "Directory does not exist"
fi