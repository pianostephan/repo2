function render(blksX, blksY, blksZ, blksRT, blksLEDs2x2, blksLEDs2x4, blksUseAlpha, blksOffset, blksCount, blksCountFromWorld){

    for(var i = 0; i <100; i++){
        if(renderBlksPart1[i] != null){
          
            renderBlksPart1[i].setEnabled(0); 
       
            renderBlksPart2[i].setEnabled(0); 
        
       
            renderBlksPart3[i].setEnabled(0); 
        
       
            renderBlksPart4[i].setEnabled(0); 
        

        renderBlksLine1A[i].setEnabled(0); 
	renderBlksLine2A[i].setEnabled(0); 
	renderBlksLine3A[i].setEnabled(0); 
	renderBlksLine4A[i].setEnabled(0); 

	renderBlksLine1B[i].setEnabled(0); 
		renderBlksLine2B[i].setEnabled(0); 
	renderBlksLine3B[i].setEnabled(0); 
	renderBlksLine4B[i].setEnabled(0); 

	renderBlksBigLine[i].setEnabled(0); 
	renderBlksSmallLine[i].setEnabled(0); 
    }

    }

    baseLEDUp[6].material = materials[(baseLED[0] & 0x38) >> 3];              
    baseLEDUp[3].material = materials[baseLED[0] & 0x07];
    baseLEDUp[0].material = materials[(baseLED[1] & 0x38) >> 3];
    baseLEDUp[9].material = materials[baseLED[1] & 0x07];

    baseLEDSide[6].material = materials[(baseLED[0] & 0x38) >> 3];              
    baseLEDSide[3].material = materials[baseLED[0] & 0x07];
    baseLEDSide[0].material = materials[(baseLED[1] & 0x38) >> 3];
    baseLEDSide[9].material = materials[baseLED[1] & 0x07];

    console.log("r blksOffset:" + blksOffset);
    for(var i = 0; i < blksCount; i++){
        
                            
        
                 
                            //!!renderBlksPart1[i] = blockChamf.clone("A" + i);
                            renderBlksPart1[i].setEnabled(1); 
                            renderBlksPart1[i].position.x = blksX[i+blksOffset];
                            renderBlksPart1[i].position.z = blksZ[i+blksOffset];
                            renderBlksPart1[i].position.y = blksY[i+blksOffset] * pitchY;
                            renderBlksPart1[i].rotation.y = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
         
                            renderBlksLine1A[i].setEnabled(1); 
                            renderBlksLine1A[i].position.x = blksX[i+blksOffset];
                            renderBlksLine1A[i].position.z = blksZ[i+blksOffset];
                            renderBlksLine1A[i].position.y = blksY[i+blksOffset] * pitchY ;
                            //renderBlksLine1A[i].rotation.y = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                            renderBlksLine1B[i].setEnabled(1); 
                            renderBlksLine1B[i].position.x = blksX[i+blksOffset];
                            renderBlksLine1B[i].position.z = blksZ[i+blksOffset];
                            renderBlksLine1B[i].position.y = blksY[i+blksOffset] * pitchY;
                            renderBlksLine1B[i].rotation.y = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                        /*    if(i < blksCountFromWorld){
                                renderBlksPart1[i].isPickable = true;
                            }else{
                                renderBlksPart1[i].isPickable = false;
                            }*/

        
        
        
                            if((blksRT[i+blksOffset] & 0x0C) == 4 ){
                                renderBlksSmallLine[i].setEnabled(1); 
                            renderBlksSmallLine[i].position.x = blksX[i+blksOffset];
                            renderBlksSmallLine[i].position.z = blksZ[i+blksOffset];
                            renderBlksSmallLine[i].position.y = blksY[i+blksOffset] * pitchY;
                            renderBlksSmallLine[i].rotation.y = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                                //renderBlksPart2[i] = blockChamf.clone("B" + i);
                                renderBlksPart2[i].setEnabled(1); 
                                renderBlksPart2[i].name = "B" + i;
        
                                renderBlksLine2A[i].setEnabled(1);
                                renderBlksLine2B[i].setEnabled(1);
                            
        
                                if((blksRT[i+blksOffset] & 0x03) == 0 ){
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]+1;
        
        
                                }
                                else if((blksRT[i+blksOffset] & 0x03) == 1 ){
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]-1;
        
                                }else if((blksRT[i+blksOffset] & 0x03) == 2 ){
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]-1;
        
                                } else if((blksRT[i+blksOffset] & 0x03) == 3 ){
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]+1;
                                }  
                                
                                renderBlksPart2[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksPart2[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine2A[i].position.y = blksY[i+blksOffset] * pitchY;
                                //renderBlksLine2A[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine2B[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksLine2B[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                               //!! if(blksLEDs2x2[i] != null){
                                // console.log('i: ' + i);
                             //   console.log('materials[blksLEDs2x2[i+blksOffset] & 0x07]: ' + materials[blksLEDs2x2[i+blksOffset] & 0x07]);
                              //  console.log('materials[(blksLEDs2x2[i+blksOffset] & 0x38) >> 3]: ' + materials[(blksLEDs2x2[i+blksOffset] & 0x38) >> 3]);
                             //   console.log('blksLEDs2x2[i+blksOffset] & 0x07: ' + (blksLEDs2x2[i+blksOffset] & 0x07));
                             //   console.log('(blksLEDs2x2[i+blksOffset] & 0x38) >> 3: ' +((blksLEDs2x2[i+blksOffset] & 0x38) >> 3));
                             //   console.log('i+blksOffset: ' + (i+blksOffset));
                                
                                    

                                    renderBlksPart2[i].material = materials[(blksLEDs2x2[i+blksOffset] & 0x07) + 8*blksUseAlpha[i+blksOffset]];
                                    renderBlksPart1[i].material = materials[((blksLEDs2x2[i+blksOffset] & 0x38) >> 3) + 8*blksUseAlpha[i+blksOffset]];
                                    
                                   // console.log('renderBlksPart1[i].material = ' +renderBlksPart1[i].material);
                               // console.log('renderBlksPart2[i].material = ' +renderBlksPart2[i].material);
        
                              //!!  }
                            
                            //0 = 2x4
                            
                            
                            }else if((blksRT[i+blksOffset] & 0x0C) == 0){
        
                                renderBlksBigLine[i].setEnabled(1); 
                                renderBlksBigLine[i].position.x = blksX[i+blksOffset];
                                renderBlksBigLine[i].position.z = blksZ[i+blksOffset];
                                renderBlksBigLine[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksBigLine[i].rotation.y = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                                
                                renderBlksPart2[i].setEnabled(1); 
                                renderBlksPart2[i].name = "D" + i;
        
                                renderBlksLine2A[i].setEnabled(1);
                                renderBlksLine2B[i].setEnabled(1);
        
        
                                renderBlksPart3[i].setEnabled(1); 
        
                                renderBlksLine3A[i].setEnabled(1);
                                renderBlksLine3B[i].setEnabled(1);
        
        
                                if((blksRT[i+blksOffset] & 0x03) == 0 ){
                                    renderBlksPart3[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksPart3[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine3A[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine3A[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine3B[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine3B[i].position.z = blksZ[i+blksOffset]+1;
                                }
                                else if((blksRT[i+blksOffset] & 0x03) == 1 ){
                                    renderBlksPart3[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksPart3[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine3A[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine3A[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine3B[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine3B[i].position.z = blksZ[i+blksOffset]-1;
        
                                }else if((blksRT[i+blksOffset] & 0x03) == 2 ){
                                    renderBlksPart3[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksPart3[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine3A[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine3A[i].position.z = blksZ[i+blksOffset]-1;
                                    
                                    renderBlksLine3B[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine3B[i].position.z = blksZ[i+blksOffset]-1;
        
                                } else if((blksRT[i+blksOffset] & 0x03) == 3 ){
                                    renderBlksPart3[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksPart3[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine3A[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine3A[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine3B[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine3B[i].position.z = blksZ[i+blksOffset]+1;
                                }  
                                
                                renderBlksPart3[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksPart3[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine3A[i].position.y = blksY[i+blksOffset] * pitchY;
                                //renderBlksLine3A[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine3B[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksLine3B[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
        
                                //!!if(blksLEDs2x2[i] != null){
                                // console.log('i: ' + i);
                               // console.log('materials[blksLEDs2x2[i] & 0x07]: ' + materials[blksLEDs2x2[i] & 0x07]);
                               // console.log('materials[(blksLEDs2x2[i] & 0x38) >> 3]: ' + materials[(blksLEDs2x2[i] & 0x38) >> 3]);
                                    renderBlksPart3[i].material = materials[(blksLEDs2x2[i+blksOffset] & 0x07) + 8*blksUseAlpha[i+blksOffset]];
                                    renderBlksPart1[i].material = materials[((blksLEDs2x2[i+blksOffset] & 0x38) >> 3)  + 8*blksUseAlpha[i+blksOffset]];
        
                               //     console.log('renderBlksPart1[i].material = ' +renderBlksPart1[i].material);
                               // console.log('renderBlksPart1[i].material = ' +renderBlksPart1[i].material);
                               // console.log('renderBlksPart2[i].material = ' +renderBlksPart2[i].material);
        
                                //!!}
        
                                renderBlksPart4[i].setEnabled(1); 
        
                                renderBlksLine4A[i].setEnabled(1);
                                renderBlksLine4B[i].setEnabled(1);
                                
                                //renderBlksPart3[i] = blockNoChamf.clone("C" + i);
                                //renderBlksPart4[i] = blockChamf.clone("D" + i);
                              
        
                                if((blksRT[i+blksOffset] & 0x03) == 0 ){
                                    renderBlksPart4[i].position.x = blksX[i+blksOffset]+2;
                                    renderBlksPart4[i].position.z = blksZ[i+blksOffset];
        
                                    renderBlksLine4A[i].position.x = blksX[i+blksOffset]+2;
                                    renderBlksLine4A[i].position.z = blksZ[i+blksOffset];
        
                                    renderBlksLine4B[i].position.x = blksX[i+blksOffset]+2;
                                    renderBlksLine4B[i].position.z = blksZ[i+blksOffset];
        
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]+3;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]+3;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]+1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]+3;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]+1;
                                 }
                                else if((blksRT[i+blksOffset] & 0x03) == 1 ){
                                    renderBlksPart4[i].position.x = blksX[i+blksOffset]; 
                                    renderBlksPart4[i].position.z = blksZ[i+blksOffset]-2;      
                                    
                                    renderBlksLine4A[i].position.x = blksX[i+blksOffset]; 
                                    renderBlksLine4A[i].position.z = blksZ[i+blksOffset]-2;  
        
                                    renderBlksLine4B[i].position.x = blksX[i+blksOffset]; 
                                    renderBlksLine4B[i].position.z = blksZ[i+blksOffset]-2;  
        
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]-3;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]-3;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]+1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]-3;
        
                                }else if((blksRT[i+blksOffset] & 0x03) == 2 ){
                                    
                                    renderBlksPart4[i].position.x = blksX[i+blksOffset]-2;
                                    renderBlksPart4[i].position.z = blksZ[i+blksOffset];
        
                                    renderBlksLine4A[i].position.x = blksX[i+blksOffset]-2;
                                    renderBlksLine4A[i].position.z = blksZ[i+blksOffset];
        
                                    renderBlksLine4B[i].position.x = blksX[i+blksOffset]-2;
                                    renderBlksLine4B[i].position.z = blksZ[i+blksOffset];
                                    
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]-3;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]-3;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]-1;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]-3;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]-1;
        
                                } else if((blksRT[i+blksOffset] & 0x03) == 3 ){
                                    renderBlksPart4[i].position.x = blksX[i+blksOffset];
                                    renderBlksPart4[i].position.z = blksZ[i+blksOffset]+2;
        
                                    renderBlksLine4A[i].position.x = blksX[i+blksOffset];
                                    renderBlksLine4A[i].position.z = blksZ[i+blksOffset]+2;
        
                                    renderBlksLine4B[i].position.x = blksX[i+blksOffset];
                                    renderBlksLine4B[i].position.z = blksZ[i+blksOffset]+2;
                                    
                                    renderBlksPart2[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksPart2[i].position.z = blksZ[i+blksOffset]+3;
        
                                    renderBlksLine2A[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2A[i].position.z = blksZ[i+blksOffset]+3;
        
                                    renderBlksLine2B[i].position.x = blksX[i+blksOffset]-1;
                                    renderBlksLine2B[i].position.z = blksZ[i+blksOffset]+3;
                                }  
                        
                                renderBlksPart4[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksPart4[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                                renderBlksLine4A[i].position.y = blksY[i+blksOffset] * pitchY;
                                //renderBlksLine4A[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                                renderBlksLine4B[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksLine4B[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2;
        
                                //renderBlksPart1[i].rotation.y = (blksRT[i] & 0x03) *Math.PI/2;
        
                                renderBlksPart2[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksPart2[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine2A[i].position.y = blksY[i+blksOffset] * pitchY;
                                //renderBlksLine2A[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
        
                                renderBlksLine2B[i].position.y = blksY[i+blksOffset] * pitchY;
                                renderBlksLine2B[i].rotation.y  = (blksRT[i+blksOffset] & 0x03) *Math.PI/2 -Math.PI;
                                
        
                               //!! if(blksLEDs2x4[i] != null){
                                    renderBlksPart2[i].material = materials[(blksLEDs2x4[i+blksOffset] & 0x07)  + 8*blksUseAlpha[i+blksOffset]];
                                    renderBlksPart4[i].material = materials[((blksLEDs2x4[i+blksOffset] & 0x38) >> 3) + 8*blksUseAlpha[i+blksOffset]];
        
                               //!! }
        
                            }
                           
                        }

}
