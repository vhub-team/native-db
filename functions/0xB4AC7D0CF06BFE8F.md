# PED::CREATE_RANDOM_PED

## Summary
Creates a random ped on foot at the specified co-ordinate

## Parameters
* **FLOAT** newCoorsX
* **FLOAT** newCoorsY
* **FLOAT** newCoorsZ

## Returns
* **PED_INDEX**

## Description
<!-- AUTOGENERATED: Remove this line before editing -->
vb.net
Dim ped_handle As Integer
                    With Game.Player.Character
                        Dim pos As Vector3 = .Position + .ForwardVector * 3
                        ped_handle = Native.Function.Call(Of Integer)(Hash.CREATE_RANDOM_PED, pos.X, pos.Y, pos.Z)
                    End With

Creates a Ped at the specified location, returns the Ped Handle.  
Ped will not act until SET_PED_AS_NO_LONGER_NEEDED is called.