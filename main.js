    if (
          selectedCustomizedDocs.find(
            (file) => file.name === convertedFile.name
          )
        ) {
          toast({
            title: 'You are attempting to add this file for the second time.',
            variant: 'blueLight',
          })
          return null
        }
